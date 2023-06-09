package com.UST.TicketBookingSystem.controller;

import com.UST.TicketBookingSystem.service.TicketBookingConsumer;
import com.UST.TicketBookingSystem.service.TicketBookingProducer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/tickets")
public class TicketController {

    @Autowired
    public TicketBookingConsumer ticketBookingConsumer;

    @Autowired
    public TicketBookingProducer ticketBookingProducer;


    @PostMapping
    public Ticket bookTicket(@RequestBody Ticket ticket) {
        return ticketService.bookTicket(ticket);
    }
}
