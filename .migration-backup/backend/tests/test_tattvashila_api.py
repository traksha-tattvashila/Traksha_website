"""Tattvashila Ecosystem backend tests covering health and intake endpoints."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/") or os.environ.get(
    "NEXT_PUBLIC_BACKEND_URL", ""
).rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health check ---
class TestHealth:
    def test_health_ok(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("service") == "tattvashila-root"


# --- Intake submission ---
class TestIntake:
    def test_intake_count_initial(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/intake/count", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert "count" in data
        assert isinstance(data["count"], int)

    def test_intake_post_valid(self, api_client):
        # Capture pre-count
        pre = api_client.get(f"{BASE_URL}/api/intake/count", timeout=15).json()["count"]

        payload = {
            "reflection": "TEST_ A reflection on the nature of dharma and inquiry.",
            "email": "TEST_seeker@example.com",
        }
        r = api_client.post(f"{BASE_URL}/api/intake", json=payload, timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "received_at" in data and isinstance(data["received_at"], str)

        # Verify count incremented
        post = api_client.get(f"{BASE_URL}/api/intake/count", timeout=15).json()["count"]
        assert post == pre + 1

    def test_intake_invalid_email(self, api_client):
        payload = {"reflection": "TEST_ valid reflection text", "email": "not-an-email"}
        r = api_client.post(f"{BASE_URL}/api/intake", json=payload, timeout=15)
        assert r.status_code == 422

    def test_intake_empty_reflection(self, api_client):
        payload = {"reflection": "", "email": "TEST_seeker2@example.com"}
        r = api_client.post(f"{BASE_URL}/api/intake", json=payload, timeout=15)
        assert r.status_code == 422

    def test_intake_reflection_too_long(self, api_client):
        payload = {"reflection": "x" * 601, "email": "TEST_seeker3@example.com"}
        r = api_client.post(f"{BASE_URL}/api/intake", json=payload, timeout=15)
        assert r.status_code == 422

    def test_intake_reflection_at_max_boundary(self, api_client):
        payload = {"reflection": "x" * 600, "email": "TEST_seeker4@example.com"}
        r = api_client.post(f"{BASE_URL}/api/intake", json=payload, timeout=15)
        assert r.status_code == 200, r.text

    def test_intake_missing_fields(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/intake", json={}, timeout=15)
        assert r.status_code == 422
