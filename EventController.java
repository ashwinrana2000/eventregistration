package com.springboot.Firsttask.controller;

import com.springboot.Firsttask.model.Event;
import com.springboot.Firsttask.model.User;
import com.springboot.Firsttask.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin
@RequestMapping("/event")
public class EventController {

    @Autowired
    EventService eventService;

    @PostMapping("/addEvent")
    public ResponseEntity<?> addEvent(@RequestBody Event event){
        Event newEvent = eventService.addEvent(event);
        if(newEvent!=null) {
            return new ResponseEntity<Event>(newEvent, HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity<String>("Event couldn't be added",HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/registerUserToEvent/user/{userId}/event/{eventId}")
    public ResponseEntity<?> registerToEvent(@PathVariable("userId") int userId, @PathVariable("eventId") int eventId){
         eventService.registerUserToEvent(userId,eventId);
         return new ResponseEntity<String>("Registered to the event", HttpStatus.CREATED);
    }
}
