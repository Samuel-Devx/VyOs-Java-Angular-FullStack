package com.vycode.vyos.crm.domain;

import com.vycode.vyos.crm.domain.Enum.StatsEnum;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Client {
    private ClientId id;
    private String name;
    private String email;
    private String phoneNumber;
    private StatsEnum stats;
}
