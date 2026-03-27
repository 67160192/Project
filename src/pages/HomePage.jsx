import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";
import { useFavorites } from "../context/FavoritesContext"; 

function HomePage() {
  const { favorites, toggleFavorite } = useFavorites(); 

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      <AddPostForm onAddPost={() => {}} />
      
      <PostList 
        favorites={favorites} 
        onToggleFavorite={toggleFavorite} 
      />
    </div>
  );
}

export default HomePage;