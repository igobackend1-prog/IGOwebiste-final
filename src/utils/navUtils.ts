import { navLinks } from "../data/siteData";
import { productDetailData } from "../data/productDetailData";

export const getEnrichedNavLinks = () => {
  return navLinks.map(link => {
    if (link.label !== "Products") return link;

    return {
      ...link,
      children: link.children?.map((category: any) => ({
        ...category,
        children: category.children?.map((subCategory: any) => {
          const categorySlug = category.href.split('/').pop();
          const subCategorySlug = subCategory.href.split('/').pop();
          
          const products = productDetailData.filter(p => 
            p.category === categorySlug && p.subcategory === subCategorySlug
          );
          
          if (products.length > 0) {
            return {
              ...subCategory,
              children: products.map(p => ({
                label: p.name,
                href: `/products/${p.category}/${p.subcategory}/${p.id}`,
                isProduct: true
              }))
            };
          }
          return subCategory;
        })
      }))
    };
  });
};
