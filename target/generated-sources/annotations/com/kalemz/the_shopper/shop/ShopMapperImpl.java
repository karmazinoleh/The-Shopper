package com.kalemz.the_shopper.shop;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-07-31T10:31:36+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class ShopMapperImpl implements ShopMapper {

    @Override
    public Shop toShop(ShopRequest shopRequest) {
        if ( shopRequest == null ) {
            return null;
        }

        Shop shop = new Shop();

        return shop;
    }
}
