'use client';

import { motion } from 'framer-motion';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
    icon?: string;
    highlight?: boolean;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>
            <div className="space-y-3">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 w-24 sm:w-28 flex-shrink-0">
                            {item.icon && <span className="mr-1" aria-hidden="true">{item.icon}</span>}
                            {item.date}
                        </span>
                        <span className="text-sm text-neutral-400" aria-hidden="true">—</span>
                        <p className={`text-sm ${item.highlight ? 'font-bold text-primary' : 'text-neutral-700 dark:text-neutral-500'}`}>
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
