package com.vycode.vyos.contatos.aplication;

import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.ClientRepository;
import com.vycode.vyos.exception.ContactNotFound;
import com.vycode.vyos.exception.ErrorCode;
import org.springframework.stereotype.Service;

@Service
public class DeleteClientUseCase {

    private final ClientRepository clientRepository;

    public DeleteClientUseCase(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public void execute(ClientId id) {
        clientRepository.findById(id)
                .orElseThrow(() -> new ContactNotFound(ErrorCode.CONTACT_NOT_FOUND));

        clientRepository.delete(id);
    }

}
