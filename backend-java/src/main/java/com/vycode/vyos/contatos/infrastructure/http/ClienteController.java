package com.vycode.vyos.contatos.infrastructure.http;

import com.vycode.vyos.contatos.aplication.*;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.infrastructure.http.Response.ClientResponse;
import com.vycode.vyos.contatos.infrastructure.http.request.ClientRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/clientes")
@RequiredArgsConstructor
public class ClienteController {

    private final ListAllCLientUseCase listAllCLientUseCase;
    private final CreateClientUseCase createClientUseCase;
    private final DeleteClientUseCase deleteClientUseCase;
    private final UpdateClientUseCase updateClientUseCase;
    @GetMapping
    public ResponseEntity<List<ClientOutput>> listAll() {
        return ResponseEntity.ok(listAllCLientUseCase.execute());
    }
    @PostMapping
    public ResponseEntity<ClientResponse>createClient(@RequestBody ClientRequest request) {
        var output = this.createClientUseCase.execute(request.toInput()) ;
        return ResponseEntity.status(HttpStatus.CREATED).body(ClientResponse.from(output));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable UUID id) {
        this.deleteClientUseCase.execute(new ClientId(id));
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ClientResponse> updateClient(
            @PathVariable UUID id, @RequestBody ClientRequest request) {
        var output = updateClientUseCase.execute(new ClientId(id), request.toInput());
        return ResponseEntity.ok(ClientResponse.from(output));
    }
}
