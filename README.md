# CyberSafe Basics

A free, static cybersecurity awareness blog page for beginners. It explains common hacking methods in plain language and gives practical protection steps.

## Files

- `index.html` - page content
- `styles.css` - responsive styling
- `script.js` - threat-card filtering
- `posts/` - individual blog article pages

## Current Topics

- Phishing awareness
- Password safety
- Mobile security
- Common cyber attack types
- What to do quickly after a cyber attack
- How to report cybercrime and save evidence

## Branch Workflow

- `main` is the live GitHub Pages branch.
- `dev` is for changes and new articles.
- Merge `dev` into `main` only when you want to publish updates.

## Preview Locally

Open `index.html` in your browser, or run a tiny local server:

```powershell
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Publish Free With GitHub Pages

1. Create a new GitHub repository, for example `cybersafe-basics`.
2. Push this folder to that repository.
3. In GitHub, open the repository settings.
4. Go to **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/root`.
7. Save.

GitHub will publish the site at a URL like:

```text
https://your-username.github.io/cybersafe-basics/
```

## Git Commands

```powershell
git init
git add .
git commit -m "Create cybersecurity awareness blog"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/cybersafe-basics.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.
