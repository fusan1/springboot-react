package com.example.springbootreact.student;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    private Long id;
    private String name;
    private String email;
    private Gender gender;
}
