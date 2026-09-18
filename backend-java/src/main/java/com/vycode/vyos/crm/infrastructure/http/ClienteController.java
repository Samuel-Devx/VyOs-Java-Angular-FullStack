package com.vycode.vyos.crm.infrastructure.http;

import com.vycode.vyos.crm.aplication.ClientOutput;
import com.vycode.vyos.crm.aplication.ListAllCLientUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/clientes")
@RequiredArgsConstructor
public class ClienteController {

    private final ListAllCLientUseCase listAllCLientUseCase;

    @GetMapping
    public ResponseEntity<List<ClientOutput>> listAll() {
        return ResponseEntity.ok(listAllCLientUseCase.execute());
    }
}
