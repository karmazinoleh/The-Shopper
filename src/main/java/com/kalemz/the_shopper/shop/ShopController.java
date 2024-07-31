package com.kalemz.the_shopper.shop;



import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("shops")
@RequiredArgsConstructor
public class ShopController {

    private final ShopService service;
    private final ShopRepository shopRepository;

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

    @PutMapping("/{id}")
    public void saveModules(@PathVariable Integer id, @RequestBody Map<String, Object> request) throws JsonProcessingException, JsonProcessingException {
        Shop shop = shopRepository.findById(id).orElseThrow(() -> new RuntimeException("Shop not found"));
        String modules = new ObjectMapper().writeValueAsString(request.get("modules"));
        shop.setModules(modules);
        shopRepository.save(shop);
    }

}
