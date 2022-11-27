package com.springboot.Firsttask.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Event implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private String eventName;
    private String eventTopic;

    @ManyToMany(mappedBy ="events",fetch = FetchType.EAGER)
    private Set<User> users = new HashSet<>();

}
