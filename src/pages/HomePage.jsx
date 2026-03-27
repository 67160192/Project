import PostList from "../components/PostList";
import AddPostForm from "../components/AddPostForm";
import { useFavorites } from "../context/FavoritesContext"; // 1. นำเข้า Context

function HomePage() {
  const { favorites, toggleFavorite } = useFavorites(); // 2. ดึงข้อมูลจาก Context

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "0 1rem" }}>
      <AddPostForm onAddPost={() => {}} />
      
      {/* 3. ส่งข้อมูล (Props) เข้าไปให้ PostList */}
      <PostList 
        favorites={favorites} 
        onToggleFavorite={toggleFavorite} 
      />
    </div>
  );
}

export default HomePage;