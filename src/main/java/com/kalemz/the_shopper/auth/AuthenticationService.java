package com.kalemz.the_shopper.auth;

import com.kalemz.the_shopper.role.RoleRepository;
import com.kalemz.the_shopper.user.Token;
import com.kalemz.the_shopper.user.TokenRepository;
import com.kalemz.the_shopper.user.User;
import com.kalemz.the_shopper.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;

    public void register(RegistrationRequest request) {
        var userRole = roleRepository.findByName("USER")
                .orElseThrow(() -> new IllegalStateException("Role user was not init.!"));
        var user = User.builder().firstname(request.getFirstname())
                .lastname(request.getLastname())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roleList(List.of(userRole))
                .build();
        userRepository.save(user);
        sendValidationEmail(user);
    }

    private void sendValidationEmail(User user){
        var newToken = generateAndSaveActivationToken(user);
        
    }
    private String generateAndSaveActivationToken(User user){
        String generatedToken = generateActivationCode(6);
        var token = Token.builder().token(generatedToken)
                .createdAt(LocalDateTime.now()).expiresAt(LocalDateTime.now().plusMinutes(10))
                .user(user).build();
        tokenRepository.save(token);
        return generatedToken;
    }

    private String generateActivationCode(int lenght) {
        String characters = "0123456789";
        StringBuilder codeBuilder = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for(int i = 0; i < lenght; i++){
            int randomIndex = secureRandom.nextInt(characters.length()); // 0 -> 9
            codeBuilder.append(characters.charAt(randomIndex));
        }
        return codeBuilder.toString();
    }
}
