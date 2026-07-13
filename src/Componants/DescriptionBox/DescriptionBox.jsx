import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. These websites serve as a virtual storefront, allowing businesses to showcase their offerings to a global audience and enabling customers to browse, select, and purchase items from the comfort of their homes.</p>
        <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
      </div>
    </div> 
  )
}

export default DescriptionBox;
