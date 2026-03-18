# App Name
PhysicalMediaMonitor

# Problem Statement
Many movie collectors have large collections of DVDs, Blu-rays, and 4K discs but no simple way to track what they own. This can lead to buying duplicates or forgetting what is already in their collection.

PhysicalMediaMonitor solves this problem by allowing users to log and organize their physical media collection in one place, making it easy to search, view, and manage their inventory.

# Target User
- Movie collectors
- Physical media enthusiasts
- Anyone who owns DVDs, Blu-rays, or 4K discs

# Core Features
- Add a new movie to the collection
- Upload or attach a photo of the DVD/Blu-ray
- Enter movie details (title, director, format)
- View all movies in a list sorted alphabetically by title
- Search movies by title
- Create and manage a wishlist
- Add images to wishlist items
- Store all data locally on the device

# User Interaction Flow
1. User opens the app
2. User lands on the collection list page
3. User views all saved movies sorted alphabetically
4. User can use the search bar to find a movie
5. User clicks "Add Movie"
6. User fills out:
   - Title
   - Director
   - Format (DVD, Blu-ray, 4K)
   - Optional image
7. User saves the movie
8. Movie appears in the collection list
9. User can navigate to the Wishlist page
10. User adds movies they want to buy
11. Wishlist items are displayed in a separate list

# Components (React-level thinking)
- App
- Navigation (Tabs or Stack)
- Header
- CollectionList
- MovieItem
- AddMovieForm
- SearchBar
- WishlistPage
- WishlistItem
- AddWishlistForm

# State and Data
- Collection list (array of movie objects)
  - id
  - title
  - director
  - format (DVD, Blu-ray, 4K)
  - image (optional)
- Wishlist list (array of movie objects)
  - id
  - title
  - director
  - format
  - image (optional)
- Search query (text input)
- Form input values

# Stretch Goals (Optional)
- Edit or delete movies from the collection
- Sort by format or director
- Mark wishlist items as purchased and move them to collection
- Add ratings or notes for each movie
- Backup data to cloud storage
- Barcode scanning for faster input
