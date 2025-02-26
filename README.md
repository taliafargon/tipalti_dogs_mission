# Tipalti- QA Automation Engineer Exercise

## Talia Fargon

## Introduction

- The purpose of this test plan is to validate the functionality, reliability, and performance of the military base API that manages garages, aircraft, and missiles.
- The test plan covers the following API endpoints:
  - Add an aircraft to a garage
  - Retrieve information

## Test Objectives

- Ensure the API correctly adds aircraft to a garage.
- Validate that missile counts are accurately tracked.
- Confirm that garage, aircraft, and missile data can be retrieved.
- Test the enforcement of garage capacity limits (10 aircraft, 100 missiles per garage).
- Verify error handling for invalid inputs and overflows.

## Test Cases

### Critical Priority Test Cases

1. **Add an aircraft with valid data to an empty garage** — expect success.
2. **Add 10 aircraft to a garage** — verify limit is correctly enforced.
3. **Add an aircraft to a full garage** — expect failure.
4. **Add missiles to an aircraft, ensuring garage missile total does not exceed 100** — expect success.
5. **Add missiles to an aircraft, pushing total missiles in garage to 101** — expect failure.
6. **Retrieve a garage's details by valid ID** — check for correct data structure and content.
7. **Get all aircraft from a garage containing multiple aircraft** — ensure complete data is returned.
8. **Retrieve a specific aircraft by valid ID** — confirm accurate details.
9. **Get missiles for an aircraft with missiles loaded** — verify missile count and IDs.

### High Priority Test Cases

1. **Add an aircraft to a non-existent garage** — expect failure.
2. **Retrieve a garage by invalid ID (string instead of number)** — expect failure.
3. **Add an aircraft with empty `{aircraftType}` field** — expect failure.
4. **Add an aircraft with empty `{missilesIds}` field** — expect failure.
5. **Attempt to add a duplicate aircraft (same ID) to a garage** — expect failure.
6. **Add a valid aircraft and retrieve it immediately** — check data consistency.
7. **Delete an aircraft and attempt to retrieve it** — expect failure.

### Medium Priority Test Cases

1. **Add aircraft with maximum missile load (100 missiles in one aircraft)** — expect success.
2. **Retrieve aircraft details with optional fields missing** — validate default behavior.
3. **Add a missile with invalid ID format** — expect failure.
4. **Get missile data from an aircraft with no missiles** — check for empty array or 204 response.

### Low Priority Test Cases

1. **Retrieve missile data for an aircraft with exactly 1 missile** — confirm proper formatting.
2. **Test headers and response structure for all endpoints.**
