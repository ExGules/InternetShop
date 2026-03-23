// src/components/common/BreadCrumbs.jsx
export default function BreadCrumbs({ currentPage }) {
  return (
    <div className="bread-crumbs">
      <div className="vertical-line"></div>
      <div className="text-home">Home</div>
      <div className={`text-shop ${currentPage === 'shop' ? 'active' : ''}`}>
        Shop
      </div>
      {currentPage === 'cart' && (
        <div className="text-cart active">Cart</div>
      )}
    </div>
  );
}