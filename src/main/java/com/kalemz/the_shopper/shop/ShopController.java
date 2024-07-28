package com.kalemz.the_shopper.shop;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("shops")
@RequiredArgsConstructor
@Tag(name = "shop")
public class ShopController {

    private final ShopService service;

    @GetMapping
    public List<Shop> getShops() {
        return null;
    }
}
