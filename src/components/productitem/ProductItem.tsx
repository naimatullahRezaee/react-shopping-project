const ProductItem = () => {
  return (
    <div className="shadow border rounded pb-2">
      <img
        className="rounded-t"
        src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
        alt=""
      />
      <div className="flex justify-between flex-row-reverse px-4 mt-2">
        <h3>عنوان محصول</h3>
        <span> 43$</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
