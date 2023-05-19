package com.ust.springboot_webflux;

import org.junit.jupiter.api.Test;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;

public class MonofluxTest {
    @Test
    public void testMono(){
        Mono<?> monoString = Mono.just("sankari").log();
        monoString.subscribe(System.out::println,(e)->System.out.println(e.getMessage()));
    }

    @Test
    public void testFlux(){
        Flux<?> fluxString = Flux.just("sankari","gfredf")
                .concatWithValues("aws").concatWithValues("cloud").log();
        fluxString.subscribe(System.out::println,(e)->System.out.println(e.getMessage()));
    }

}
