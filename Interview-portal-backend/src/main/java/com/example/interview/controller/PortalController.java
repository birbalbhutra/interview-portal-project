package com.example.interview.controller;

import com.example.interview.entity.CodeDetails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
@PropertySource("classpath:/key.properties")
public class PortalController {

    String url = "https://api.jdoodle.com/v1/execute";

    @Value("${client_id}")
    String clientId;

    @Value("${client_secret}")
    String clientSecret;

    @PostMapping(value = "/code", consumes = {"application/json"})
    public ResponseEntity<String> compileCode(@RequestBody CodeDetails payload) {
        RestTemplate restTemplate = new RestTemplate();
        payload.setClientId(clientId);
        payload.setClientSecret(clientSecret);
        String response = restTemplate.postForObject(url, payload, String.class);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }
}
