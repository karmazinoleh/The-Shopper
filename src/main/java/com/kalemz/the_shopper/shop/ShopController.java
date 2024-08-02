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
@CrossOrigin(origins = "http://localhost:4200")
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

    @PutMapping("/{id}/modules")
    public void saveModules(@PathVariable Integer id, @RequestBody Map<String, String> request) {
        String modules = request.get("modules");
        service.updateModules(id, modules);
    }

}
