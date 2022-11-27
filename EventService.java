package com.springboot.Firsttask.service;

import com.springboot.Firsttask.model.Event;
import com.springboot.Firsttask.model.User;
import com.springboot.Firsttask.repo.EventRepo;
import com.springboot.Firsttask.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class EventService {

    private User users;

    @Autowired
    UserRepo userRepo;

    @Autowired
    EventRepo eventRepo;

    public Event addEvent(Event event){
        return eventRepo.save(event);
    }

    public void registerUserToEvent(int userId, int eventId){
        Optional<Event> newEventId = eventRepo.findById(eventId);
        Optional<User> newUserId = userRepo.findById(userId);
        if(newEventId.isPresent()&&newUserId.isPresent()){
            Event event = newEventId.get();
            User user = newUserId.get();
            user.getEvents().add(event);
            userRepo.save(user);
        }
        }
}
