Fix the `/book` appointment embed so the calendar is reliably visible after a full page refresh.

Plan:
1. Remove the booking iframe from the animated `Reveal` wrapper so external script timing cannot leave it hidden or unmounted after refresh.
2. Give the iframe a stable mobile-friendly container and explicit height using viewport-aware sizing, instead of relying only on the external resize script.
3. Load the external booking script in a refresh-safe way: ensure it is present, and if it already exists, re-initialize by remounting the iframe with a stable key/id rather than skipping setup.
4. Add a small visible fallback link/button to open the scheduler directly if the third-party embed fails to load.
5. Verify on mobile `/book` by loading fresh, refreshing, and confirming the calendar remains visible and not cropped.