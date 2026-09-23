package com.vycode.vyos.contatos.aplication;

import com.vycode.vyos.contatos.domain.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ListAllCLientUseCase {

    private final ClientRepository clientRepository;

    public ListAllCLientUseCase(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public List<ClientOutput> execute() {
        return clientRepository.findAll().stream()
                .map(ClientOutput::fromDomain)
                .toList();
    }


}
