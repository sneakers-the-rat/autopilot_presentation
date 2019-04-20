library(ggplot2)
library(here)


tests <- read.csv('rpilot_latency.csv')
tests <- data.frame(lags=tests[1:51, "latency"])
tests$systems <- 'rpilot'

bpod <- read.csv('bpod_latency.csv')
bpod <- data.frame(lags=bpod[1:100,"latency"])
bpod$systems <- 'bpod (observed)'

tests <- rbind(tests, bpod)

mean_lag <- mean(tests[tests$systems=="rpilot",]$lags)
bpod_lag <- mean(tests[tests$systems=="bpod (observed)",]$lags)
system_names <- c("rpilot", "bpod (claimed)", "pyControl", "bpod (observed)", "psychopy")
mean_lags <- data.frame(systems = ordered(system_names, levels=rev(system_names)),
                        lags = c(mean_lag, 7.5, 15, bpod_lag, 40))

g.lags <- ggplot(mean_lags, aes(x=systems, y=lags))+
  geom_bar(aes(x=systems, y=lags),
           fill=c("#ff2020", "#40d375", "#ff2020","#ff2020","#40d375"),
           stat="identity")+
  geom_point(data=tests,
             position=position_jitter(height=0,width=0.2),
             alpha=0.5,
             color="#f5f5f5",
             size=0.5)+
  coord_flip()+
  theme_void()

ggsave('./assets/lags_render.pdf', plot=g.lags, width=8, height=3, units="in", useDingbats=FALSE)
