# Holiday Lists

A packing and shopping checklist app for phones. It works offline, and the Barbados list is built in.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app, including the 128 Barbados items |
| `sw.js` | A small helper file that lets the app open with no signal. Keep it next to `index.html`. |

`.claude/` and this README aren't needed for hosting.

## Put it online for free (Netlify Drop, about 2 minutes)

1. On a computer, make a new folder called `holiday-list-site`. Copy **`index.html`** and **`sw.js`** into it.
2. Go to **https://app.netlify.com/drop**.
3. Drag the **`holiday-list-site` folder** onto the page.
4. After a few seconds you get a link like `https://random-name-123.netlify.app`. Open it to check.
5. **Keep the site.** Sites dropped without an account are deleted after about an hour. Click **"Claim site"** or sign up (free, and you can use Google) and the site stays.
6. Optional: go to **Site configuration → Change site name** and pick something like `karim-holiday`. Your link becomes `https://karim-holiday.netlify.app`.

**To update the app later:** open the site in Netlify, go to **Deploys**, and drag the folder onto the "drag and drop" area again. The link stays the same.

### Alternatives
- **GitHub Pages:** create a public repository, upload both files, then go to **Settings → Pages → Deploy from branch → main**. You get a link like `https://<you>.github.io/<repo>/`.
- **Cloudflare Pages:** go to **Workers & Pages → Create → Pages → Upload assets** and drag the folder in.
- **Railway** works too, but it's built for running servers. This app is static files, so it's more setup than you need.

## Send it to Tasmia

1. Send her the Netlify link on WhatsApp or iMessage.
2. She opens it and taps **Barbados**. The full list is already there.
3. To copy your ticks to her phone (or hers to yours):
   1. On the phone with the ticks, tap **More → Send my ticks**, then **Share…** or **Copy**, and send it.
   2. On the other phone, tap **More → Import ticks**, paste, check the preview, then tap **Merge**.
   3. For each item, the most recent change wins, and that includes un-ticks.
4. **Ticks are saved on each phone separately.** There is no server. Send your ticks after each shopping trip or packing session.

## Add to Home Screen

**iPhone (Safari):**
1. Open the link in Safari.
2. Tap **Share** (the square with an arrow), then **Add to Home Screen**, then **Add**.
3. Open the app once from the icon while you have signal. It then also works offline.
4. The Home Screen app and Safari keep **separate** lists. Use the icon from now on. If someone sends you a list link, copy it and paste it into **Paste a shared link or code** on the app's home screen. Don't tap it to open in Safari.

**Android (Chrome):**
1. Open the link in Chrome.
2. Tap **⋮ → Add to Home screen** (it may say **Install app**), then **Install**.
3. Open it once while online, and it works offline after that.

## Using a CSV for another holiday

On the home screen, tap **＋ New trip → Upload a CSV file**. Use the same columns as the Barbados file:

`id, category, item, qty, source, criticality, why_critical, notes, packed, sort_order`

Only `item` is required. The **Download a template** button in that screen gives you a sample file.
