package com.springboot.Firsttask.service;

import com.springboot.Firsttask.model.Event;
import com.springboot.Firsttask.model.User;
import com.springboot.Firsttask.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    UserRepo userRepo;

    public User addUser(User user){
        return userRepo.save(user);
    }

    public void registerCourse(Set<Event> event, int userId){
        Optional<User> registerUser = userRepo.findById(userId);
        User user= registerUser.get();
        event.addAll(user.getEvents());
        user.setEvents(event);
        userRepo.save(user);
    }

}
