package com.UST.TicketBookingSystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;

@Component
    public class TicketBookingProducer {

        private static final String TOPIC = "ticket-bookings";

        private final KafkaTemplate<String, Long> kafkaTemplate;

        @Autowired
        public TicketBookingProducer(KafkaTemplate<String, Long> kafkaTemplate) {
            this.kafkaTemplate = kafkaTemplate;
        }

        public void sendTicketBookedEvent(Long ticketId) {
            kafkaTemplate.send(TOPIC, ticketId);
        }
}
