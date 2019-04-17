library(ggplot2)

tests <- read.csv('./rpilot_latency.csv')
tests <- data.frame(lags=tests[1:51, "latency"])
tests$systems <- 'rpilot'
mean_lag <- mean(lags$lags)
system_names <- c("rpilot", "bpod", "pyControl", "psychopy")
mean_lags <- data.frame(systems = ordered(system_names, levels=rev(system_names)),
                        lags = c(mean_lag, 7.5, 15, 40))

g.lags <- ggplot(mean_lags, aes(x=systems, y=lags))+
  geom_bar(aes(x=systems, y=lags),
           fill=c("#f26483", "#f26483", "#f26483","#4cb69f"),
           stat="identity")+
  geom_point(data=tests,
             position=position_jitter(height=0,width=0.2),
             alpha=0.5,
             color="#f5f5f5",
             size=0.5)+
  coord_flip()+
  theme_void()

ggsave('./images/lags_render.pdf', plot=g.lags, width=8, height=3, units="in", useDingbats=FALSE)
