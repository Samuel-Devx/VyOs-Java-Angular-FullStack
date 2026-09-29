package com.vycode.vyos.contatos.aplication;

import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.ClientRepository;
import com.vycode.vyos.exception.ContactNotFound;
import com.vycode.vyos.exception.ErrorCode;
import org.springframework.stereotype.Service;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;
@Service
public class UpdateClientUseCase {

    private final ClientRepository clientRepository;

    public UpdateClientUseCase(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public ClientOutput execute(ClientId id, ClientInput clientInput) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ContactNotFound(ErrorCode.CONTACT_NOT_FOUND));

        client.applyPartialUpdate(clientInput);

        clientRepository.update(client);
        return ClientOutput.fromDomain(client);
    }
}
