package com.kalemz.the_shopper.shop;

import com.kalemz.the_shopper.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ShopService {

    private final ShopRepository shopRepository;
    private final ShopMapper shopMapper;

    public Integer addShop(ShopRequest request, Authentication connectedUser) {
        User user = ((User) connectedUser.getPrincipal());
        Shop shop = shopMapper.toShop(request);
        shop.setOwner(user);
        return shopRepository.save(shop).getId();
    }

    public List<Shop> getAllShops() {
        return shopRepository.findAll();
    }

    public Shop getShopById(Integer id) {
        return shopRepository.findById(id).orElseThrow(() -> new RuntimeException("Shop not found"));
    }

    public void deleteShop(Integer id) {
        shopRepository.deleteById(id);
    }

    public void updateModules(Integer id, String modules) {
        Shop shop = shopRepository.findById(id).orElseThrow(() -> new RuntimeException("Shop not found"));
        shop.setModules(modules);
        shopRepository.save(shop);
    }

}
