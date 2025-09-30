// components/CategoryLayout.jsx
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";

function CategoryLayout() {
    const { catId } = useParams();
  return (
    <div>
        {!catId && <h1>Categories List Page</h1>}
      <Outlet />
    </div>
  );
}
export default CategoryLayout;
