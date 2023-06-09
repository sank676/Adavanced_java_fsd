package com.UST.TicketBookingSystem.service;

import com.UST.TicketBookingSystem.entity.Ticket;
import com.UST.TicketBookingSystem.repository.TicketRepository;
import com.UST.TicketBookingSystem.repository.TrainRepository;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class TicketBookingConsumer {

    private final TicketRepository ticketRepository;
    private final TrainRepository trainRepository;

    public TicketBookingConsumer(TicketRepository ticketRepository, TrainRepository trainRepository) {
        this.ticketRepository = ticketRepository;
        this.trainRepository = trainRepository;
    }

    @KafkaListener(topics = "ticket-bookings", groupId = "ticket-bookings-group")
    public void consumeTicketBookedEvent(Long ticketId) {
        // Process the ticket booking event
        Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket not found"));
    }
}