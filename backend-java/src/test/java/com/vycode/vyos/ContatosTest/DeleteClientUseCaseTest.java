package com.vycode.vyos.ContatosTest;

import com.vycode.vyos.contatos.aplication.DeleteClientUseCase;
import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.ClientRepository;
import com.vycode.vyos.exception.ContactNotFound;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class DeleteClientUseCaseTest {

    @Mock
    private ClientRepository repository;

    @InjectMocks
    private DeleteClientUseCase useCase;

    @Test
    void shouldDeleteWhenClientExists() {
        Client client = ClientFixture.client();
        when(repository.findById(client.getId())).thenReturn(Optional.of(client));

        useCase.execute(client.getId());

        verify(repository).delete(client.getId());
    }

    @Test
    void shouldThrowAndNotDeleteWhenClientDoesNotExist() {
        ClientId id = new ClientId(UUID.randomUUID());
        when(repository.findById(id)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> useCase.execute(id))
                .isInstanceOf(ContactNotFound.class);

        verify(repository, never()).delete(any());
    }
}