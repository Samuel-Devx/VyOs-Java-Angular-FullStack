package com.vycode.vyos.ContatosTest;

import com.vycode.vyos.contatos.aplication.ClientOutput;
import com.vycode.vyos.contatos.aplication.FindByIdClientUseCase;
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

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class FindByIdClientUseCaseTest {

    @Mock
    private ClientRepository repository;

    @InjectMocks
    private FindByIdClientUseCase useCase;

    @Test
    void shouldReturnClientWhenExists() {
        Client client = ClientFixture.client();
        when(repository.findById(client.getId())).thenReturn(Optional.of(client));

        ClientOutput output = useCase.execute(client.getId());

        assertThat(output.id()).isEqualTo(client.getId().id().toString());
        assertThat(output.name()).isEqualTo(client.getName());
    }
    @Test
    void shouldThrowNotFoundWhenClientDoesNotExist() {
        ClientId id = new ClientId(UUID.randomUUID());
        when(repository.findById(id)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> useCase.execute(id))
                .isInstanceOf(ContactNotFound.class);
    }
}
