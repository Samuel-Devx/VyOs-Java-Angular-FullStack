package com.vycode.vyos.ContatosTest;

import com.vycode.vyos.contatos.aplication.ClientInput;
import com.vycode.vyos.contatos.aplication.ClientOutput;
import com.vycode.vyos.contatos.aplication.UpdateClientUseCase;
import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientId;
import com.vycode.vyos.contatos.domain.ClientRepository;
import com.vycode.vyos.exception.ContactNotFound;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class UpdateClientUseCaseTest {

    @Mock
    private ClientRepository repository;

    @InjectMocks
    private UpdateClientUseCase useCase;

    @Test
    void shouldUpdateAndSaveClient() {
        Client clientExisting = ClientFixture.client();
        var input = new ClientInput("Maria Souza", "maria.souza@email.com", "24988888888");
        when(repository.findById(clientExisting.getId())).thenReturn(Optional.of(clientExisting));
        when(repository.update(any(Client.class))).thenAnswer(inv -> inv.getArgument(0));

        ClientOutput output = useCase.execute(clientExisting.getId(), input);

        ArgumentCaptor<Client> captor = ArgumentCaptor.forClass(Client.class);
        verify(repository).update(captor.capture());
        assertThat(captor.getValue().getName()).isEqualTo("Maria Souza");
        assertThat(output.name()).isEqualTo("Maria Souza");
    }
    @Test
    void shouldThrowAndNotSaveWhenClientDoesNotExist() {
        ClientId id = new ClientId(UUID.randomUUID());
        when(repository.findById(id)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> useCase.execute(id, ClientFixture.input()))
                .isInstanceOf(ContactNotFound.class);

        verify(repository, never()).save(any());
    }

}
