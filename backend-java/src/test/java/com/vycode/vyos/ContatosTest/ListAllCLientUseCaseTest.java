package com.vycode.vyos.ContatosTest;

import com.vycode.vyos.contatos.aplication.ClientOutput;
import com.vycode.vyos.contatos.aplication.FindByIdClientUseCase;
import com.vycode.vyos.contatos.aplication.ListAllCLientUseCase;
import com.vycode.vyos.contatos.domain.ClientRepository;
import com.vycode.vyos.contatos.infrastructure.http.Response.ClientResponse;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class ListAllCLientUseCaseTest {


    @Mock
    private ClientRepository repository;

    @InjectMocks
    private ListAllCLientUseCase useCase;

    @Test
    void shouldReturnAllClientsMapped() {
        when(repository.findAll()).thenReturn(List.of(ClientFixture.client(), ClientFixture.client()));
        List<ClientOutput> result = useCase.execute(null);

        assertThat(result).hasSize(2);
        verify(repository).findAll();
        verify(repository, never()).search(org.mockito.ArgumentMatchers.anyString());

    }
    @Test
    void shouldReturnEmptyListWhenNoClients() {
        when(repository.findAll()).thenReturn(List.of());

        assertThat(useCase.execute(null)).isEmpty();
    }
}
