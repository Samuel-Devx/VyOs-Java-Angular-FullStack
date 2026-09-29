package com.vycode.vyos.contatos.aplication;

import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.ClientRepository;
import com.vycode.vyos.exception.ContactNotFound;
import com.vycode.vyos.exception.ErrorCode;
import org.springframework.stereotype.Service;

@Service
public class FindByIdClientUseCase {

    private final ClientRepository clientRepository;

    public FindByIdClientUseCase(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public ClientOutput execute(ClientId id) {
        return clientRepository.findById(id)
                .map(ClientOutput::fromDomain)
                .orElseThrow(() -> new ContactNotFound(ErrorCode.CONTACT_NOT_FOUND));
    }
}
