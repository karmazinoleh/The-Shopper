package com.kalemz.the_shopper.shop;


import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("shops")
@RequiredArgsConstructor
public class ShopController {

    private final ShopService service;

    @PostMapping
    public Integer createShop(@RequestBody ShopRequest shopRequest, Authentication authentication) {
        return service.addShop(shopRequest, authentication);
    }

    @GetMapping
    public List<Shop> getAllShops() {
        return service.getAllShops();
    }

    @GetMapping("/{id}")
    public Shop getShopById(@PathVariable Integer id) {
        return service.getShopById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteShop(@PathVariable Integer id) {
        service.deleteShop(id);
    }
}
