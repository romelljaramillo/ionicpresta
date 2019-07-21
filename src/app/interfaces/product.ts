export interface Product {
    id: number,
    id_manufacturer: string,
    id_supplier: string,
    id_category_default: string,
    new: string,
    cache_default_attribute: string,
    id_default_image: string,
    id_default_combination: string,
    id_tax_rules_group: string,
    position_in_category: string,
    manufacturer_name: string,
    quantity: string,
    type: string,
    id_shop_default: string,
    reference: string,
    supplier_reference: string,
    location: string,
    width: string,
    height: string,
    depth: string,
    weight: string,
    quantity_discount: string,
    ean13: string,
    isbn: string,
    upc: string,
    cache_is_pack: string,
    cache_has_attachments: string,
    is_virtual: string,
    state: string,
    additional_delivery_times: string,
    delivery_in_stock: delivery_in_stock[],
    delivery_out_stock: delivery_out_stock[],
    on_sale: string,
    online_only: string,
    ecotax: string,
    minimal_quantity: string,
    low_stock_threshold: null,
    low_stock_alert: string,
    price: string,
    wholesale_price: string,
    unity: string,
    unit_price_ratio: string,
    additional_shipping_cost: string,
    customizable: string,
    text_fields: string,
    uploadable_files: string,
    active: string,
    redirect_type: string,
    id_type_redirected: string,
    available_for_order: string,
    available_date: string,
    show_condition: string,
    condition: string,
    show_price: string,
    indexed: string,
    visibility: string,
    advanced_stock_management: string,
    date_add: string,
    date_upd: string,
    pack_stock_type: string,
    meta_description: meta_description[],
    meta_keywords: meta_keywords[],
    meta_title: meta_title[],
    link_rewrite: link_rewrite[],
    name: name[],
    description: description[],
    description_short: description_short[],
    available_now: available_now[],
    available_later: available_later[],
    associations: associations
}


interface delivery_in_stock {
    id: string,
    value: string
}

interface delivery_out_stock {
    id: string,
    value: string
}

interface meta_description {
    id: string,
    value: string
}

interface meta_keywords {
    id: string,
    value: string
}

interface meta_title {
    id: string,
    value: string
}

interface link_rewrite {
    id: string,
    value: string
}

interface name {
    id: string,
    value: string
}

interface description {
    id: string,
    value: string
}

interface description_short {
    id: string,
    value: string
}

interface available_now {
    id: string,
    value: string
}

interface available_later {
    id: string,
    value: string
}

interface description_short {
    id: string,
    value: string
}

interface associations {
    categories: categories[],
    images: images,
    combinations: combinations,
    product_option_values: product_option_values,
    stock_availables: stock_availables
}

interface categories {
    id: string
}

interface images {
    id: string
}

interface combinations {
    id: string
}

interface product_option_values {
    id: string
}

interface stock_availables {
    id: string
}