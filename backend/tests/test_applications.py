"""Backend tests for the Ecosystem Partnership Program APIs."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://opportunity-engine-24.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- API root health ---
def test_api_root(session):
    r = session.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data


# --- POST /api/applications create + persistence verification ---
def test_create_application_success(session):
    payload = {
        "name": "TEST_Alice Doe",
        "email": "test_alice@example.com",
        "company": "TEST Coffee Co",
        "business_type": "café",
        "ecosystem_interest": "Solana",
        "message": "Interested in partnership",
    }
    r = session.post(f"{API}/applications", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["company"] == payload["company"]
    assert data["business_type"] == payload["business_type"]
    assert data["ecosystem_interest"] == "Solana"
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data

    # Verify persistence via GET list
    r2 = session.get(f"{API}/applications")
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    ids = [it.get("id") for it in items]
    assert data["id"] in ids


def test_create_application_minimal_required(session):
    payload = {
        "name": "TEST_Minimal",
        "email": "test_min@example.com",
        "company": "TEST Min Co",
        "business_type": "startup",
    }
    r = session.post(f"{API}/applications", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data["ecosystem_interest"] == ""
    assert data["message"] == ""


def test_create_application_invalid_email(session):
    payload = {
        "name": "TEST_Bad",
        "email": "not-an-email",
        "company": "TEST",
        "business_type": "startup",
    }
    r = session.post(f"{API}/applications", json=payload)
    assert r.status_code == 422


def test_create_application_missing_required_fields(session):
    payload = {"name": "TEST_OnlyName"}
    r = session.post(f"{API}/applications", json=payload)
    assert r.status_code == 422


# --- GET /api/applications ---
def test_list_applications_returns_list(session):
    r = session.get(f"{API}/applications")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    if data:
        item = data[0]
        # Required fields
        for f in ["id", "name", "email", "company", "business_type", "created_at"]:
            assert f in item
        # _id must not be exposed
        assert "_id" not in item
