package com.kalemz.the_shopper.shop;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ShopMapper {
    Shop toShop(ShopRequest shopRequest);
}
