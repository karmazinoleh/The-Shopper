package com.kalemz.the_shopper.shop;

import com.kalemz.the_shopper.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Transactional
public class ShopService {

    private final ShopRepository ShopRepository;
    private final ShopRepository shopRepository;

    public Integer addShop(ShopRequest request, Authentication authentication){
        User user = (User) authentication.getPrincipal();
        Shop shop = new Shop();
        shop.setShopName(request.getName());
        shop.setCreatedBy(user.getId());
        shop.setCreatedDate(LocalDateTime.now());
        shop.setOwner(user);
        return shopRepository.save(shop).getId();
    }

}
