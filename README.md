# Senior Capstone Group Website

A simple, static website for your group that displays members, meetings & activities, and upcoming schedules.

## 📁 Project Structure

```
webpage/
├── index.html              # Main webpage
├── styles.css              # Styling
├── script.js               # JavaScript to load data
├── data/                   # Data files (edit these!)
│   ├── members.json        # Group members and roles
│   ├── activities.json     # Past meetings and activities
│   └── schedule.json       # Upcoming schedule
└── README.md               # This file
```

## 🚀 How to Use

1. **Open the website**: Simply open `index.html` in any web browser
2. **No server needed**: This is a static website that works offline
3. **Can be deployed anywhere**: GitHub Pages, Netlify, your own server, etc.

## ✏️ Modifying Content

All content is stored in easy-to-edit **JSON files** in the `data/` folder. You don't need to know how to code to modify these!

### Editing Members (`data/members.json`)

```json
{
  "members": [
    {
      "name": "Your Name",
      "role": "Your Role",
      "email": "your.email@ttu.edu",
      "phone": "(806) 123-4567"
    }
  ]
}
```

**Fields:**
- `name` (required): Member's full name
- `role` (required): Position in the group (e.g., "Lead Developer")
- `email` (optional): Contact email
- `phone` (optional): Phone number

### Editing Activities (`data/activities.json`)

```json
{
  "activities": [
    {
      "title": "Activity Name",
      "date": "January 15, 2026",
      "description": "What happened at this meeting or activity"
    }
  ]
}
```

**Fields:**
- `title` (required): Name of the activity
- `date` (required): When it happened
- `description` (required): Details about the activity

### Editing Schedule (`data/schedule.json`)

```json
{
  "schedule": [
    {
      "date": "March 5, 2026",
      "title": "Event Name",
      "description": "What will happen at this event",
      "location": "Where it will be"
    }
  ]
}
```

**Fields:**
- `date` (required): When the event is
- `title` (required): Name of the event
- `description` (required): Details
- `location` (optional): Where it will take place

## 📝 Tips for Editing

1. **Use a text editor**: Any text editor works (VS Code, Notepad, TextEdit, etc.)
2. **Keep it valid JSON**: 
   - Every field needs quotes around values
   - Commas separate items (but no comma after the last item)
   - Use proper bracket format
3. **Valid date format**: Use any readable format like:
   - "March 5, 2026"
   - "03/05/2026"
   - "March 5"

## 🎨 Customizing Appearance

- **Colors**: Edit the color variables in `styles.css` (lines 7-12)
- **Fonts**: Change font in `styles.css` (line 22)
- **Layout**: Modify grid sizes and spacing in `styles.css`

## 🔴 Using TTU Brand Colors

The website uses TTU red as the primary color by default:
- Primary: `#CC0000` (TTU Red)
- Secondary: `#000000` (Black)

## ⚠️ Common Mistakes

❌ **Wrong**: `"name": Member Name,` (missing quotes, comma in wrong place)  
✅ **Right**: `"name": "Member Name",`

❌ **Wrong**: 
```json
{
  "members": [
    {"name": "John"},
    {"name": "Jane"},  ← Comma shouldn't be here!
  ]
}
```

✅ **Right**: 
```json
{
  "members": [
    {"name": "John"},
    {"name": "Jane"}  ← No comma after last item
  ]
}
```

## 📱 Responsive Design

The website automatically adjusts for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 🌐 Deploying Your Website

### Free Options:

1. **GitHub Pages**
   - Push files to GitHub
   - Enable Pages in repository settings
   - Website accessible at `username.github.io/repository-name`

2. **Netlify**
   - Connect GitHub repo to Netlify
   - Automatic deployment on every update

3. **Vercel**
   - Similar to Netlify, very easy setup

### On Your Own Server:
Just upload all files to your server's web directory.

## 🛠️ Troubleshooting

**Website looks broken?**
- Make sure JSON files are properly formatted
- Check browser console (F12 → Console tab)
- Verify file names match exactly

**Changes not showing up?**
- Refresh the page (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Check that JSON files are saved

**Can't open index.html?**
- Make sure you're opening in a browser, not a text editor
- Double-click `index.html` to open in default browser

## 📞 Need Help?

If something isn't working, check:
1. Browser console for error messages (F12)
2. JSON file formatting using [JSONLint.com](https://jsonlint.com/)
3. File paths match your folder structure
