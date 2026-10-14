package com.vycode.vyos.ContatosTest;

import com.vycode.vyos.contatos.aplication.ClientOutput;
import com.vycode.vyos.contatos.aplication.CreateClientUseCase;
import com.vycode.vyos.contatos.domain.Client;
import com.vycode.vyos.contatos.domain.ClientRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
@ExtendWith(MockitoExtension.class)
public class CreateClientUseCaseTest {


    @Mock
    private ClientRepository clientRepository;

    @InjectMocks
    private CreateClientUseCase createClientUseCase;



    @Test
    void shouldCreateAndSaveClient() {
      
        var input = ClientFixture.input();
        when(clientRepository.save(any(Client.class))).thenAnswer(inv -> inv.getArgument(0));

        ClientOutput output = createClientUseCase.execute(input); // ADAPTAR: nome do método

        ArgumentCaptor<Client> captor = ArgumentCaptor.forClass(Client.class);
        verify(clientRepository).save(captor.capture());

        Client saved = captor.getValue();
        assertThat(saved.getName()).isEqualTo(input.name());     // ADAPTAR
        assertThat(saved.getEmail()).isEqualTo(input.email());   // ADAPTAR
        assertThat(output).isNotNull();
        assertThat(output.name()).isEqualTo(input.name());       // ADAPTAR
    }

}
