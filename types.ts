// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name?: string;
    description?: string;
    section_image?: CosmicImage;
    display_order?: number;
  };
}

export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    description?: string;
    price?: string;
    featured_image?: CosmicImage;
    category?: MenuCategory;
    dietary_info?: string[];
    chefs_signature?: boolean;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    atmosphere_description?: string;
    address?: string;
    phone?: string;
    hours?: string;
    reservation_link?: string;
    reservation_info?: string;
    location_photo?: CosmicImage;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    quote?: string;
    star_rating?: number;
    location?: Location;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}