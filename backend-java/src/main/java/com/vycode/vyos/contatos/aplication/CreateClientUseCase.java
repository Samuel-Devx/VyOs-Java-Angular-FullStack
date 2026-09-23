package com.vycode.vyos.contatos.aplication;

import com.vycode.vyos.contatos.domain.ClientRepository;
import org.springframework.stereotype.Service;

@Service
public class CreateClientUseCase {

    private final ClientRepository clientRepository;

    public CreateClientUseCase(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public ClientOutput execute(ClientInput clientInput) {
        var client = clientInput.toDomain();
        clientRepository.save(client);
        return ClientOutput.fromDomain(client);
    }


}
